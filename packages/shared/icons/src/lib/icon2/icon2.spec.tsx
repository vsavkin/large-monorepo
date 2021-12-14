import { render } from '@testing-library/react';

import Icon2 from './icon2';

describe('Icon2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon2 />);
    expect(baseElement).toBeTruthy();
  });
});
