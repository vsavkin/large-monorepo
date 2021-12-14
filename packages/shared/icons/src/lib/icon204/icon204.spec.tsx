import { render } from '@testing-library/react';

import Icon204 from './icon204';

describe('Icon204', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon204 />);
    expect(baseElement).toBeTruthy();
  });
});
