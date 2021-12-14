import { render } from '@testing-library/react';

import Component97 from './component97';

describe('Component97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component97 />);
    expect(baseElement).toBeTruthy();
  });
});
