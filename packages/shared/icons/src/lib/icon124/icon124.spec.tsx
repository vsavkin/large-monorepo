import { render } from '@testing-library/react';

import Icon124 from './icon124';

describe('Icon124', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon124 />);
    expect(baseElement).toBeTruthy();
  });
});
