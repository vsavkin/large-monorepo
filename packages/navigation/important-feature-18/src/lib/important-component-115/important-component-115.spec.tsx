import { render } from '@testing-library/react';

import ImportantComponent115 from './important-component-115';

describe('ImportantComponent115', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent115 />);
    expect(baseElement).toBeTruthy();
  });
});
