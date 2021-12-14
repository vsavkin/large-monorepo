import { render } from '@testing-library/react';

import ImportantComponent198 from './important-component-198';

describe('ImportantComponent198', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent198 />);
    expect(baseElement).toBeTruthy();
  });
});
