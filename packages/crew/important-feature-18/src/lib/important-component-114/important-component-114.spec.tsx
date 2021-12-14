import { render } from '@testing-library/react';

import ImportantComponent114 from './important-component-114';

describe('ImportantComponent114', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent114 />);
    expect(baseElement).toBeTruthy();
  });
});
