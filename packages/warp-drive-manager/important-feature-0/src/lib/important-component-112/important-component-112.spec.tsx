import { render } from '@testing-library/react';

import ImportantComponent112 from './important-component-112';

describe('ImportantComponent112', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent112 />);
    expect(baseElement).toBeTruthy();
  });
});
