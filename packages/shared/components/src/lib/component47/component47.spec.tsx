import { render } from '@testing-library/react';

import Component47 from './component47';

describe('Component47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component47 />);
    expect(baseElement).toBeTruthy();
  });
});
