import { render } from '@testing-library/react';

import Icon164 from './icon164';

describe('Icon164', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon164 />);
    expect(baseElement).toBeTruthy();
  });
});
