import { render } from '@testing-library/react';

import ImportantComponent113 from './important-component-113';

describe('ImportantComponent113', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent113 />);
    expect(baseElement).toBeTruthy();
  });
});
