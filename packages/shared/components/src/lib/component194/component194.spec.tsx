import { render } from '@testing-library/react';

import Component194 from './component194';

describe('Component194', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component194 />);
    expect(baseElement).toBeTruthy();
  });
});
