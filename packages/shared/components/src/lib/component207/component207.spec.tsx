import { render } from '@testing-library/react';

import Component207 from './component207';

describe('Component207', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component207 />);
    expect(baseElement).toBeTruthy();
  });
});
