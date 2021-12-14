import { render } from '@testing-library/react';

import ImportantComponent107 from './important-component-107';

describe('ImportantComponent107', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent107 />);
    expect(baseElement).toBeTruthy();
  });
});
