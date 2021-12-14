import { render } from '@testing-library/react';

import Icon168 from './icon168';

describe('Icon168', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon168 />);
    expect(baseElement).toBeTruthy();
  });
});
