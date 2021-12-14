import { render } from '@testing-library/react';

import Component48 from './component48';

describe('Component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component48 />);
    expect(baseElement).toBeTruthy();
  });
});
