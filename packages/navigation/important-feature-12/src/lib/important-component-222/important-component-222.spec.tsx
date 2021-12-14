import { render } from '@testing-library/react';

import ImportantComponent222 from './important-component-222';

describe('ImportantComponent222', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent222 />);
    expect(baseElement).toBeTruthy();
  });
});
