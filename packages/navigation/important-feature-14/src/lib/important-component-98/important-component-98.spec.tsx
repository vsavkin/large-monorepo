import { render } from '@testing-library/react';

import ImportantComponent98 from './important-component-98';

describe('ImportantComponent98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent98 />);
    expect(baseElement).toBeTruthy();
  });
});
